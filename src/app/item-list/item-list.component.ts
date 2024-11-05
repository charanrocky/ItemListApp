// src/app/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any = []; // Array to hold the fetched items
  filteredItems: any = []; // Array to hold the filtered items
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadItems();
  }

  public loadItems(): void {
    this.http
      .get('https://67283d19270bd0b97554c20a.mockapi.io/amazonproducts')
      .subscribe((data) => {
        this.items = data;
        this.filteredItems = data;
      });
  }

  filterItems(): void {
    this.filteredItems = this.items.filter((item: any) =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  sortItems(order: string): void {
    // Sort items based on the title
    this.filteredItems.sort((a: any, b: any) => {
      const comparison = a.title.localeCompare(b.title);
      return order === 'asc' ? comparison : -comparison;
    });
  }
}
