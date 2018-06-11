import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  private loaded = false;
  constructor() { }

  ngOnInit() {
    document.querySelector('a-assets').addEventListener('loaded', function () {
      this.loaded = true;
    });
  }

}
