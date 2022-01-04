import { useCookies } from "react-cookie";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-modal";
import { testCpf } from "../../utils/testCpf";
import { Container, Error, StyledForm } from "./styles";

interface RegisterModalProps {
  isOpen: boolean;
  onResquestClose: () => void;
}

export const RegisterModal = ({
  isOpen,
  onResquestClose,
}: RegisterModalProps) => {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    cpf: Yup.string()
      .required("Required")
      .test("cpf", "CPF Inválido", (value) => testCpf(value)),
  });

  const [cookies, setCookie] = useCookies(["nome"]);

  function onSubmit(values: any, actions: any) {
    localStorage.setItem("dados", JSON.stringify(values));
    setCookie("nome", values.name, { path: "/" });
    alert("Registro enviado com sucesso");
  }

  function completeCEP(e: any, setFieldValue: any) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onResquestClose}>
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: "",
          cpf: "",
        }}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched, isValid, setFieldValue }) => (
          <Container>
            <h2>Register</h2>
            <Form>
              <StyledForm>
                <button className="close" onClick={onResquestClose}>
                  x
                </button>
                <div className="form-control-group">
                  <label htmlFor="name">Nome </label> <br />
                  <Field id="name" name="name" type="text" htmlFor="name" />
                  {errors.name && touched.name ? (
                    <Error>{errors.name}</Error>
                  ) : null}
                </div>
                <div className="form-control-group">
                  <label>Data de nascimento</label> <br />
                  <Field name="bithday" type="date" />
                </div>
                <div className="form-control-group">
                  <label>CPF</label> <br />
                  <Field name="cpf" type="text" />
                  {errors.cpf && touched.cpf ? (
                    <Error>{errors.cpf}</Error>
                  ) : null}
                </div>
                <div className="form-control-group">
                  <label>Cep</label> <br />
                  <Field
                    name="cep"
                    type="text"
                    onBlur={(e: any) => completeCEP(e, setFieldValue)}
                  />
                </div>
                <div className="form-control-group">
                  <label>Logradouro</label> <br />
                  <Field name="logradouro" type="text" id="logradouro" />
                </div>
                <div className="form-control-group">
                  <label>Número</label> <br />
                  <Field name="numero" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Complemento</label> <br />
                  <Field name="complemento" type="text" />
                </div>
                <div className="form-control-group">
                  <label>bairro</label> <br />
                  <Field name="bairro" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Cidade</label> <br />
                  <Field name="cidade" type="text" />
                </div>
                <div className="form-control-group">
                  <label>Estado</label> <br />
                  <Field component="select" name="uf">
                    <option value="01">Selecione o Estado</option>
                    <option value="RO">Rondônia</option>
                    <option value="AC">Acre</option>
                    <option value="AM">Amazonas</option>
                    <option value="RR">Roraima</option>
                    <option value="PA">Pará</option>
                    <option value="AP">Amapá</option>
                    <option value="TO">Tocantins</option>
                    <option value="MA">Maranhão</option>
                    <option value="PI">Piauí</option>
                    <option value="CE">Ceará</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="PB">Paraíba</option>
                    <option value="PE">Pernambuco</option>
                    <option value="AL">Alagoas</option>
                    <option value="SE">Sergipe</option>
                    <option value="BA">Bahia</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="SP">São Paulo</option>
                    <option value="PR">Paraná</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="MS">Mato Grosso do Sul </option>
                    <option value="MT">Mato Grosso</option>
                    <option value="GO">Goiás</option>
                    <option value="DF">Distrito Federal </option>
                  </Field>
                </div>
                <button
                  className="btn-submit"
                  type="submit"
                  disabled={!isValid}
                >
                  Enviar
                </button>
              </StyledForm>
            </Form>
          </Container>
        )}
      </Formik>
    </Modal>
  );
};
