import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as config from '../../config/GOST_7_0_5_2008.json';

@Component({
  selector: 'app-dynamic-source-form',
  templateUrl: './dynamic-source-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicSourceFormComponent implements OnChanges {
  @Input() sourceType!: string;
  @Input() standard: string = 'GOST_7_0_5_2008';

  form!: FormGroup;
  fields: any[] = [];
  currentFormat: string = '';

  constructor(private fb: FormBuilder) {}
  getSourceLabel(): string {
      const standardConfig = (config as any)[this.standard];
      return standardConfig?.[this.sourceType]?.label || this.sourceType;
    }
  ngOnChanges() {
    console.log('Source type changed:', this.sourceType);

    const standardConfig = (config as any)[this.standard];
    if (!standardConfig) {
      console.error('Standard not found:', this.standard);
      return;
    }

    const typeConfig = standardConfig[this.sourceType];
    if (!typeConfig) {
      console.error('Source type not found:', this.sourceType);
      return;
    }

    this.currentFormat = typeConfig.format || '';
    this.fields = typeConfig.fields || [];

    const group: any = {};
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      group[field.name] = [null, validators];
    });

    this.form = this.fb.group(group);
    console.log('Form initialized:', this.form);
  }

  getFormattedCitation(): string {
    if (!this.form.valid) return 'Заполните все обязательные поля';

    let result = this.currentFormat;
    for (const field of this.fields) {
      const value = this.form.get(field.name)?.value;
      if (value !== null && value !== undefined) {
        if (field.type === 'date') {
          result = result.replace(`{${field.name}}`, this.formatDate(value));
        } else {
          result = result.replace(`{${field.name}}`, value);
        }
      } else {
        result = result.replace(`{${field.name}}`, '');
      }
    }

    // Clean up any remaining placeholders
    result = result.replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim();
    return result;
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU');
  }
}
