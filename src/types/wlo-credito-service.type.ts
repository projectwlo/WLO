export declare namespace WloCreditoService {
    interface SolicitudPersonaRequest {
        Pws_i_codigo: string;
        Pws_Identificacion: string;
        Pws_Tip_Identificacion: string;
        Pws_Tip_Estado: string;
        Pws_Tip_Perfil: string;
        Pws_Tip_person: string;
        Pws_Tip_ocupa: string;
        Pws_Nombres: string;
        Pws_Apellidos1: string;
        Pws_Apellidos2: string;
        Pws_Telefono1: string;
        Pws_Telefono2: string;
        Pws_Correo: string;
        Pws_Fec_expe: string;
        Pws_Lugar_exp: string;
        Pws_Fec_nacime: string;
        Pws_Estado_Civil: string;
        Pws_Direccion_res: string;
        Pws_Departamento: string;
        Pws_Ciudad_res: string;
        Pws_Genero: string;
        Pws_Estrato_per: string;
        Pws_Per_cargo: string;
        Pws_Tip_vivienda: string;
        Pws_Niv_estudio: string;
        Pws_Nom_empre: string;
        Pws_fec_ingemp: string;
        Pws_Fideliza: string;
        Pws_Tip_contra: string;
        Pws_Ant_labo: string;
        Pws_Car_emp: string;
        Pws_Nom_Jefedi: string;
        Pws_Direc_emp: string;
        Pws_Ciud_emp: string;
        Pws_tel_emp1: string;
        Pws_tel_emp2: string;
    }

    interface SolicitudRequest {
        Pws_num_solicitud: string;
        Pws_Identificacion: string;
        Pws_Tip_Identificacion: string;
        Pws_Tip_Perfil: string;
        Pws_Tip_Person: string;
        Pws_Fideliza: string;
        Pws_Tip_Estado: string;
        Pws_fec_solicitud: string;
        Pws_Nombres: string;
        Pws_Apellidos1: string;
        Pws_Apellidos2: string;
        Pws_Telefono1: string;
        Pws_Telefono2: string;
        Pws_Correo: string;
        Pws_Val_cuoini: string;
        Pws_Val_pla: string;
        Pws_Val_finan: string;
        Pws_Val_cuo: string;
    }

    interface CodeudorRequest {
        Pws_codigo: string;
        Pws_num_solicitud: string;
        Pws_Identificacion: string;
        Pws_Radic_Codeu: string;
        Pws_Tip_Identificacion: string;
        Pws_Iden_Code: string;
        Pws_Tip_Identificacion_Code: string;
    }

    interface ConyugueRequest {
        Pws_Num_solicitud: string;
        Pws_Identificacion: string;
        Pws_Tip_Identificacion: string;
        Pws_Con_Tip_identif: string;
        Pws_Con_nomsol: string;
        Pws_Con_identif: string;
        Pws_Con_tel: string;
    }

    interface ReferenciasRequest {
        s_num_solicitud: string;
        s_identificacion: string;
        s_tipo_identificacion: string;
        s_ref_tipo: string;
        s_ref_parentes: string;
        s_ref_nomcomple: string;
        s_ref_telfij: string;
        s_ref_telcel: string;
    }

    interface DocumentosRequest {
        Pws_num_solicitud: string;
        Pws_Identificacion: string;
        Pws_Tip_Identificacion: string;
        Pws_Doc_Tipo: string;
        Pws_Doc_nombre: string;
        Pws_Doc_estado: string;
        Pws_Doc_ruta: string;
        Pws_Clave_doc: string;
    }

    interface PepsRequest {
        s_num_solicitud: string;
        s_identificacion: string;
        s_tipo_identificacion: string;
        s_pep_recpublic: string;
        s_pep_poderpublic: string;
        s_pep_reconpublic: string;
        s_pep_pubexpue: string;
        s_pep_seggraconsa: string;
        s_pep_nompepseg: string;
        s_pep_paren: string;
        s_pep_identif: string;
    }

    interface OperacionesFinancierasRequest {
        s_num_solicitud: string;
        s_identificacion: string;
        s_tipo_identificacion: string;
        s_ingreso_principal: string;
        s_otros_ingresos: string;
        s_otros_egresos: string;
        s_arriendo: string;
        s_concep_otr_ingre: string;
        s_declarante_ren: string;
        s_moneda_ext: string;
        s_monext_oper: string;
        s_tip_monext: string;
        s_cuent_ext: string;
        s_cuen_extban: string;
        s_cuen_extnum: string;
        s_cuen_extpais: string;
        s_cuen_extciudad: string;
    }

    interface InventarioRequest {
        pws_cod_producto: string;
        pws_tip_producto: string;
        pws_cate_producto: string;
    }

    interface RegOTPRequest {
        Pws_Num_solicitud: string;
        Pws_Identificacion: string;
        Pws_Tip_Identificacion: string;
        Pws_Fec_gen: string;
        Pws_estado_resotp: string;
        Pws_Tip_val: string;
        Pws_Cod_Otp: string;
    }

    interface LoginRequest {
        Pws_Identificacion: string;
        Pws_Tip_identificacion: string;
        Pws_clave_usu: string;
        Pws_Tip_perfil: string;
        Pws_Tip_Canal: string;
        Pws_Tip_cambio: string;
    }

    interface SimuladorCreditoRequest {
        pws_monto: string;
        pws_nro_cuotas: string;
        pws_fecha_sol: string;
        pws_val_recog: string;
        pws_cod_credi: string;
        pws_form_plazo: string;
        pws_identific: string;
        pws_form_periodic: string;
        pws_val_tf1: string;
        pws_fec_tf1: string;
        pws_val_tf2: string;
        pws_fec_tf2: string;
        pws_val_tf3: string;
        pws_fec_tf3: string;
    }
    interface PerfilPermisoRequest{
        Pws_Tip_perfil: string;
        Pws_permi_lisfun: string;
        Pws_Permi_consul: string;
        Pws_Permi_Actuali: string;
        Pws_Permi_Elimin: string;
        Pws_Permi_insert: string;
        Pws_estado_fun: string;
    }

    enum StatusType {
        SIMULATOR = 1,
        APPLICATION_CONFIRMATION= 2,
        SIGN_DOCUMENTS = 3,
        APPLICATION_FINISHED = 4
    }

    enum PersonType {
        NATURAL = 'N',
        LEGAL= 'J',
    }
}