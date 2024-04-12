/*import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { InstructorService } from 'src/app/demo/service/instructor.service';
import { Instructor } from 'src/app/demo/api/instructor';

@Component({
    templateUrl: './instructor.component.html',
    providers: [MessageService]
})
export class InstructorComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    instructores: Instructor[] = [];

    constructor( private instructorService: InstructorService, private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        
        this.instructorService.getInstructores().then(data => this.instructores = data);

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.product = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
*/


import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/demo/api/instructor';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { InstructorService } from 'src/app/demo/service/instructor.service';

@Component({
    templateUrl: './instructor.component.html',
    providers: [MessageService]
})
export class InstructorComponent implements OnInit {

    instructorDialog: boolean = false;
    
    deleteInstructorDialog: boolean = false;

    deleteInstructoresDialog: boolean = false;

    //products: Product[] = [];
    instructores: Instructor[] = [];

    //product: Product = {};
    instructor: Instructor = {};

    //selectedProducts: Product[] = [];
    selectedInstructores: Instructor[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private instructorService: InstructorService, private messageService: MessageService) { }

    ngOnInit() {
        this.instructorService.getInstructores().then(data => this.instructores = data);

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'apellidos', header: 'Apellidos' }
        ];
        
    }

    openNew() {
        this.instructor = {};
        this.submitted = false;
        this.instructorDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteInstructoresDialog = true;
    }

    editProduct(instructor: Instructor) {
        this.instructor = { ...instructor };
        this.instructorDialog = true;
    }

    deleteProduct(instructor: Instructor) {
        this.deleteInstructorDialog = true;
        this.instructor = { ...instructor };
    }

    confirmDeleteSelected() {
        this.deleteInstructoresDialog = false;
        this.instructores = this.instructores.filter(val => !this.selectedInstructores.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Instructores Borrado', life: 3000 });
        this.selectedInstructores = [];
    }

    confirmDelete() {
        this.deleteInstructorDialog = false;
        this.instructores = this.instructores.filter(val => val.id !== this.instructor.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Instructor Borrado', life: 3000 });
        this.instructor = {};
    }

    hideDialog() {
        this.instructorDialog = false;
        this.submitted = false;
    }

    saveInstructor() {
        this.submitted = true;

        if (this.instructor.nombre?.trim()) {
            if (this.instructor.id) {
                // @ts-ignore
                this.instructor.inventoryStatus = this.instructor.inventoryStatus.value ? this.instructor.inventoryStatus.value : this.product.inventoryStatus;
                this.instructores[this.findIndexById(this.instructor.id)] = this.instructor;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Instructor Actualizado', life: 3000 });
            } else {
                this.instructor.id = this.createId();                
                this.instructores.push(this.instructor);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Instructor Creado', life: 3000 });
            }

            this.instructores = [...this.instructores];
            this.instructorDialog = false;
            this.instructor = {};
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.instructores.length; i++) {
            if (this.instructores[i].id == id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): number {
        let id = 1000;        
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }


}
