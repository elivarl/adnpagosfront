export class ServicioElectrico{
    id: string;
    numeroServicio: string;
    identificacionCliente: string;
    nombreCliente: string;
    mes: string;
    fechaMaximaPago:Date; 
    valor: number;
    estado: boolean;
    fechaCreacion: Date;

    constructor(id:string, numeroServicio:string, identificacionCliente:string, nombreCliente:string,mes:string,fechaMaximaPago:Date, valor:number, estado:boolean ){
        this.id=id;
        this.numeroServicio=numeroServicio;
        this.identificacionCliente=identificacionCliente;
        this.nombreCliente=nombreCliente;
        this.mes=mes;
        this.fechaMaximaPago=fechaMaximaPago;
        this.valor=valor;
        this.estado=estado;
        this.fechaCreacion= new Date();
    }


}