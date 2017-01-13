import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(data:string, defaultTrimLength : number = 30) : string{
		return data.length < defaultTrimLength ? data : data.substr(0,defaultTrimLength) + '...';
	}
}