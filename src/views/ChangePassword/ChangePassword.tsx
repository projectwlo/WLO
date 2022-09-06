import {Form, FormGroup, Input, Label, Row} from 'reactstrap';
import './ChangePassword.scss';

interface ChangePasswordProps {
}

export function ChangePassword(_props: ChangePasswordProps) {
    return (
        <div>
            <div className="title-change-password">{'Cambio de contraseña'}</div>
            <div
                className='subtitle-change-password'>{'La nueva contaseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.'}</div>

            <Form>
                <Row>
                    <FormGroup>
                        <Label className="password-now" for="main_income">
                            {'Contraseña actual'}
                        </Label>
                        <Input
                            id="mail"
                            name="mail"
                            type="text"
                            className='input-change-password'
                            placeholder='Ingresar'
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label className="password-new " for="main_income">
                            {'Contraseña actual'}
                        </Label>
                        <Input
                            id="mail"
                            name="mail"
                            type="text"
                            className='input-change-password'
                            placeholder='Ingresar'
                        />
                    </FormGroup>
                </Row>
            </Form>
        </div>
    )
}