import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string|number): string {
        return value + 'teste';
    }
}