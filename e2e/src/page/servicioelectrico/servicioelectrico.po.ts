import { by, element } from 'protractor'

export class ServicioElectricoPage {
    private linkCrearServicioElectrico = element(by.id('linkCrearServicioElectrico'));
    private linkListarServicioElectrico = element(by.id('linkListarServicioElectrico'));
    private inputNumeroServicio = element(by.id('inputNumeroServicio'));
    private inputIdentificacionCliente = element(by.id('identificacionCliente'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private inputFechaMaximaPago = element(by.id('fechaMaximaPago'));
    private inputValor = element(by.id('valor'));

    private listaServiciosElectricos = element.all(by.css('table.servicios tr'));

    async clickBotonCrearServicioElectrico() {
        await this.linkCrearServicioElectrico.click();
    }

    async ingresarNumeroServicio(numeroServicio) {
        await this.inputNumeroServicio.sendKeys(numeroServicio);
    }

    async ingresarIdentificacionCliente(identificacionCliente) {
        await this.inputIdentificacionCliente.sendKeys(identificacionCliente);
    }

    async ingresarNombreCliente(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async ingresarFechaMaximaPago(fechaMaximaPago) {
        await this.inputFechaMaximaPago.sendKeys(fechaMaximaPago);
    }
    async ingresarValor(valor) {
        await this.inputValor.sendKeys(valor);
    }

    async clickBotonListarServicioElectrico() {
        await this.linkListarServicioElectrico.click();
    }

    async contarServicios() {
        return this.listaServiciosElectricos.count();
    }

}
