import {NgModule} from '@angular/core';
import {SortPipe} from './pipes/Sort.pipe';
import {TrimTextPipe} from './pipes/TrimText.pipe';
import {ElapsedPipe} from './pipes/elapsed.pipe';

@NgModule({
	declarations : [SortPipe, TrimTextPipe, ElapsedPipe],
	exports : [SortPipe, TrimTextPipe, ElapsedPipe]
})
export class UtilsModule{

}