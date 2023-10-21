import React from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";

const FormLogin = () => {
  const [selected, setSelected] = React.useState("login");
  return (
    <div className="flex flex-col w-full items-center justify-center mt-20">
      <Card className="max-w-full w-[340px] h-[auto]">
        <CardBody className="overflow-hidden">
          <Tabs fullWidth size="md" aria-label="Tabs form" selectedKey={selected} onSelectionChange={setSelected}>
            <Tab key="login" title="Iniciar sesión">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Ingrese su email" type="email" />
                <Input isRequired label="Contraseña" placeholder="Ingrese su contraseña" type="password" />
                <p className="text-center text-small">
                  ¿Necesitas crear una cuenta?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Registrarme
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Iniciar sesión
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Registrarme">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Nombre" placeholder="Ingrese su nombre" type="password" />
                <Input isRequired label="Email" placeholder="Ingrese su email" type="email" />
                <Input isRequired label="Contraseña" placeholder="Ingrese su contraseña" type="password" />
                <p className="text-center text-small">
                  ¿Tienes cuenta?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Iniciar sesión
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Registrarme
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default FormLogin;
