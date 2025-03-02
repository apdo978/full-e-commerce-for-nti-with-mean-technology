import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';


@Pipe({
  name: 'search',//name of the pip
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform( Productss: Products[],value: string): Products[] {
      if (!Productss || !value) {
      return Productss; // إذا لم تكن هناك قيمة بحث، أعِد القائمة الأصلية
    }
         return Productss.filter(product => {
      // تحقق من وجود 'title' و 'description' وقيمتهما قبل استخدام 'toLowerCase'
      const titleMatch = product?.title?.toLowerCase().includes(value.toLowerCase());
      const descriptionMatch = product?.description?.toLowerCase().includes(value.toLowerCase());

      return titleMatch || descriptionMatch; // إذا تطابق مع أحدهما أو كليهما
    });//logic 

}}
