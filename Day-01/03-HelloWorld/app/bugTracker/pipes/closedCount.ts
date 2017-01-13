import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : Array<IBug) : number{
		return bugs.filter(bug => bug.isClosed).length;
	}
}