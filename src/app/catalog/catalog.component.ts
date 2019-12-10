import { Component, OnInit } from '@angular/core';
class Course{
  name: string;
  imageURL: string
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  courses: Course[] = [
    {name: "Course1", imageURL: "https://stepik.org/media/cache/images/courses/58973/cover_ejRH1cU/ec59d29e048b7087ce7d3f4d41fbda2b.png"},
    {name: "Course2", imageURL: "https://stepik.org/media/cache/images/courses/51562/cover_RPCWYD5/491a3cfcd25c231125b815518abde66d.png"},
    {name: "Course3", imageURL: "https://stepik.org/media/cache/images/courses/53858/cover/0d9ced47bb9d901b29a8fc0e7dc753b4.png"}
  ];
  constructor() { }

  ngOnInit() {
  }

  accordCards($event: boolean, cards: HTMLElement){
    if($event)
      cards.style.marginLeft = '200px';
    else cards.style.marginLeft = '20px';


  }

}
