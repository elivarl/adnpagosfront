
import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ServicioElectricoPage } from '../page/servicioelectrico/servicioelectrico.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let servicioElectrico: ServicioElectricoPage;

    beforeEach(
        () => {
            page = new AppPage();
            navbar = new NavbarPage();
            servicioElectrico = new ServicioElectricoPage();
        }
    );
    it('Debería crear un servicio electrico', () => {
        const NUMERO_SERVICIO = '001';
        const IDENTIFICACION_CLIENTE = '1717213183';
        const NOMBRE_CLIENTE = 'Elivar Largo';
        const FECHA_MAXIMA_PAGO = '2022-02-26 13:17:17';
        const VALOR = '10';

        page.navigateTo();
        navbar.clickBotonServicioElectricos();
        servicioElectrico.clickBotonCrearServicioElectrico();
        servicioElectrico.ingresarNumeroServicio(NUMERO_SERVICIO);
        servicioElectrico.ingresarIdentificacionCliente(IDENTIFICACION_CLIENTE);
        servicioElectrico.ingresarNombreCliente(NOMBRE_CLIENTE);
        servicioElectrico.ingresarFechaMaximaPago(FECHA_MAXIMA_PAGO);
        servicioElectrico.ingresarValor(VALOR);

    });

    it('Deberia listar Servicios electricos', () => {
        page.navigateTo();
        navbar.clickBotonServicioElectricos();
        servicioElectrico.clickBotonListarServicioElectrico();

        expect(2).toBe(servicioElectrico.contarServicios());
    });
}
);

