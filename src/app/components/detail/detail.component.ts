import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
	
		private route = inject(ActivatedRoute); // ✅

		
    detailId: string | null = null;
    
    
	ngOnInit() {
	    
	    this.detailId = this.route.snapshot.paramMap.get('id'); // ✅
	}

}