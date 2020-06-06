import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directivangiffor',
	templateUrl: './directivangiffor.component.html',
	styleUrls: ['./directivangiffor.component.scss']
})
export class DirectivangifforComponent implements OnInit {
	categoria: any = [
		{ codigo: 0, texto: 'Girls' },
		{ codigo: 1, texto: 'Ambar' },
		{ codigo: 2, texto: 'Erika' },
		{ codigo: 3, texto: 'Lynna' }
	];
	temporal: any;
	noticias: any = [
		{
			categoria: {
				codigo: 1,
				texto: 'ambar'
			},
			titulo: 'Ambar darlyn',
			texto: 'Una chica linda pero muy celosa y vale arta paloma de celos',
			imagen: '../../assets/img/ambar.png'
		},
		{
			categoria: {
				codigo: 2,
				texto: 'Erika'
			},
			titulo: 'Erika',
			texto: 'Una amiga muy loka',
			imagen: '../../assets/img/erika.png'
		},
		{
			categoria: {
				codigo: 3,
				texto: 'Lynna'
			},
			titulo: 'Lynna',
			texto: 'Chica hermosa con bonitos sentimientos',
			imagen: '../../assets/img/lynna.jpg'
		},
		{
			categoria: {
				codigo: 1,
				texto: 'ambar'
			},
			titulo: 'Ambar darlyn',
			texto: 'Una chica linda pero muy celosa y vale arta paloma de celos',
			imagen: '../../assets/img/ambar1.png'
		},
		{
			categoria: {
				codigo: 2,
				texto: 'Erika'
			},
			titulo: 'Erikita',
			texto: 'Chaparra hermosa',
			imagen: '../../assets/img/erika1.jpg'
		},
		{
			categoria: {
				codigo: 3,
				texto: 'Lynna'
			},
			titulo: 'LYnna',
			texto: 'Chica guapa con hermosos sentimientos',
			imagen: '../../assets/img/lynna1.jpg'
		}];
	constructor() {
		this.temporal = this.noticias;
	}

	ngOnInit() {
	}
	eventoControl(event) {
		if (event.target.value == 0) {
			this.noticias = this.temporal;
		} else {
			this.noticias = this.temporal.filter((item) => {
				return item.categoria.codigo == event.target.value;
			})
		}
	}

}
