import { ServicioElectrico } from 'src/app/feature/servicioelectrico/shared/model/servicio-electrico';
export class Pago {
    id: string;
    fechaPago: string;
    identificacionCliente: string;
    subTotal: number;
    porcentajeDescuentoRecargo: string;
    valorDescuentoRecargo: number;
    total: number;
    pagoServicios: Array<ServicioElectrico> = [];
    comandoServicioElectricos: Array<ServicioElectrico> = [];

    constructor(id: string, fechaPago: string, identificacionCliente: string,
        subTotal: number, porcentajeDescuentoRecargo: string, valorDescuentoRecargo: number,
        total: number, pagoServicios: ServicioElectrico[]) {
        this.id = id;
        this.fechaPago = fechaPago;
        this.identificacionCliente = identificacionCliente;
        this.subTotal = subTotal;
        this.porcentajeDescuentoRecargo = porcentajeDescuentoRecargo;
        this.valorDescuentoRecargo = valorDescuentoRecargo;
        this.total = total;
        this.pagoServicios = pagoServicios;
    }
}
