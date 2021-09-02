/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import SelectField from 'components/SelectField';
import { cidadeFields, estadosFields } from 'utils/fields';
import { FieldErrors } from 'utils/validations';
import { unmask } from 'utils/masks';
import { updateAddresValidate } from 'utils/validations/auth';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import { Form, FormError, FormLoading} from '..';

const MyAddressForm: React.FC = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateAddres } = useAuth();
  const { user } = useAuth();
  const [values, setValues] = useState({
    street: user.endereco.logradouro,
    residencial_number: user.endereco.numero_residencial,
    complement: user.endereco.complemento,
    district: user.endereco.bairro,
    state: user.endereco.estado,
    city: user.endereco.cidade,
    postal_code: user.endereco.cep,
  });
  
  const [cities, setCities] = useState(()=>{
    return cidadeFields(values.state)
  })
  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  useEffect(() => {
    setCities(cidadeFields(values.state))
  }, [values.state])

  function onBlurCep(ev: any) {

    const { value } = ev.target;

    const cep = unmask(value);

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValues(s => ({ ...s, 
          'street': data.logradouro,
          'city': data.localidade,
          'state': data.uf,
          'district': data.bairro,
          'residencial_number': '',
          'complement': '',
        }));
      });
  }
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // TODO alterar para validar no onChange
    const errors = updateAddresValidate(values);
    if(Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }
    
    setFieldError({});
    try{
      await updateAddres({... values});
    }catch (e){
      setFormError(e.message)
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    console.log(values)
  },[values])

  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Meu endereço
      </Heading>
      {!!formError && (
        <FormError>
          <ErrorIcon />
          {formError}
        </FormError>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          label="CEP"
          name="cep"
          type="text"
          mask="cep"
          initialValue={values.postal_code}
          placeholder="00000-000"
          onBlur={(ev) => onBlurCep(ev)}
          error={fieldError.postal_code}
        />
        <SelectField
          label="Estado"
          name="estado"
          initialValue={values.state}
          placeholder="Selecione seu estado"
          options={estadosFields}
          value={values.state}
          onSelectChange={v => handleInput('state', v)}
          error={fieldError.state}
        />
        <SelectField
          label="Cidade"
          name="cidade"
          initialValue={values.city}
          placeholder="Selecione sua cidade"
          options={cities}
          onSelectChange={v => handleInput('city', v)}
          value={values.city}
          error={fieldError.city}
        />
        <TextField
          label="Bairro"
          name="bairro"
          type="text"
          initialValue={values.district}
          placeholder="Insira seu bairro"
          value={values.district}
          onInputChange={v => handleInput('district', v)}
          error={fieldError.district}
        />
        <TextField
          label="Logradouro"
          name="logradouro"
          type="text"
          initialValue={values.street}
          onInputChange={v => handleInput('street', v)}
          value={values.street}
          placeholder="Insira seu logradouro"
          error={fieldError.street}
        />
        <TextField
          label="Número"
          name="numero"
          type="number"
          initialValue={values.residencial_number}
          placeholder="Insira seu número"
          onInputChange={v => handleInput('residencial_number', v)}
          value={values.residencial_number}
          error={fieldError.residencial_number}
        />
        <TextField
          label="Complemento"
          name="complemento"
          type="text"
          initialValue={values.complement}
          placeholder="Insira seu complemento"
          onInputChange={v => handleInput('complement', v)}
          value={values.complement}
          error={fieldError.complement}
        />
        <Button type="submit" disabled={loading}>
        {loading ? <FormLoading /> : <span>Salvar</span>}
          </Button>
      </Form>
    </>
  );
};
export default MyAddressForm;
