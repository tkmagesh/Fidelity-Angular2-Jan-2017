import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	transform(data : Array<any>, attrName : string, isDescending : boolean = false) : Array<any>{
		if (!data || !data.length || !attrName) return data;

		var comparer = getComparerFor(attrName);
		if (isDescending)
			comparer = getDescending(comparer);

		data.sort(comparer);
		return data;
	}
}

interface IComparer{
	(item1:any, item2:any) : number
}

function getDescending(comparer : IComparer) : IComparer{
	return function(item1 : any, item2 : any) : number{
		return -1 * comparer(item1, item2);
	}
}
function getComparerFor(attrName : string) : IComparer {
	return function(item1:any, item2:any) : number{
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0
	}
}