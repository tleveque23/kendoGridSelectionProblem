import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData" 
        [selectable]="{ mode: 'single' }" 
        [navigable]="true" 
        [height]="300">
            
            <kendo-grid-column field="ProductName" title="Product Name"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>

        <div style="margin-top: 3rem">
            <app-show-data />
        </div>
    `,
})
export class AppComponent {
    public gridData: unknown[] = products;
}
