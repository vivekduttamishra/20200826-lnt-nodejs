import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ca-rating',
  template: `
    <span>
      <i *ngFor='let star of stars' class="fa {{star}}"></i>
    </span>
  `,
  styles: [
  ]
})
export class CaRatingComponent implements OnInit {
  
  @Input() public value=2.42;  //@Input suggests that this component will receive an input
  public stars:string [];
  private fullStar='fa-star';
  private halfStar='fa-star-half';
  
  constructor() { 
    


  }

  ngOnInit(): void {
    console.log('this.value',this.value);
    
    let intRating= Math.floor(this.value);
    let fractionRating=this.value-intRating;
    this.stars=[];

    for(let i=0;i<intRating;i++)
      this.stars.push(this.fullStar);

    if(fractionRating>=0.4)
      this.stars.push(this.halfStar);
  }

}
