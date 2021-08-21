/* eslint-disable jsx-a11y/anchor-is-valid */
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { FormLink, FormContainer, FormLoading } from '.';

describe('<Form />', () => {
  it('should render my link', () => {
    const { container } = renderWithTheme(
      <FormContainer>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormContainer>,
    );
    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-eCApnc {
        margin: 1.6rem 0 0.8rem 0;
      }

      .c0 .sc-jSFjdj {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #171923;
        text-align: center;
      }

      .c1 a {
        color: #159CAE;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #159CAE;
        -webkit-transition: color,border,0.15s ease-in-out;
        transition: color,border,0.15s ease-in-out;
      }

      .c1 a:hover {
        color: #107380;
        border-bottom: 0.1rem solid #107380;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `);
  });

  it('should render loading img', () => {
    renderWithTheme(
      <FormContainer>
        <FormLoading />
      </FormContainer>,
    );
    expect(screen.getByAltText(/carregando\.\.\./i));
  });
});
