/* eslint-disable jsx-a11y/anchor-is-valid */
import { renderWithTheme } from 'utils/tests/helpers';

import { FormLink, FormContainer } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormContainer>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormContainer>,
    );
    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-jSFjdj {
        margin: 1.6rem 0 0.8rem 0;
      }

      .c0 .sc-gKAaRy {
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
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
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
});
