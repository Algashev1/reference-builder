import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Правильный импорт CommonModule
import { DynamicSourceFormComponent } from './components/dynamic-source-form/dynamic-source-form.component';

@Component({
  selector: 'app-manual-source',
  standalone: true,
  imports: [
    CommonModule,
    DynamicSourceFormComponent
  ],
  templateUrl: './manual-source.component.html',
  styleUrls: ['./manual-source.component.scss']
})
export class ManualSourceComponent {
  sources = [
    { value: 'book', label: 'Книга' },
    { value: 'journal-article', label: 'Статья из журнала' },
    { value: 'collection-article', label: 'Статья из сборника' },
    { value: 'thesis', label: 'Диссертация' },
    { value: 'patent', label: 'Патент' },
    { value: 'regulation', label: 'Нормативный документ' },
    { value: 'internet-resource', label: 'Интернет-ресурс' },
    { value: 'monograph', label: 'Монография' },
    { value: 'textbook', label: 'Учебник' },
    { value: 'reference-book', label: 'Справочник' }
  ];

  selectedSourceType: string = '';
  selectedSourceLabel: string = '';

  selectSourceType(sourceType: string) {
    this.selectedSourceType = sourceType;
    const selected = this.sources.find(s => s.value === sourceType);
    this.selectedSourceLabel = selected ? selected.label : '';
  }
}
