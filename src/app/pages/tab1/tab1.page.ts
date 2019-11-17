import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  data = [
    {
      title: "Bag 1",
      description: "This is a small bag",
      price: "40",
      image: "bag1.jpg"
    },
    {
      title: "Bag 2",
      description: "This is a medium bag",
      price: "100",
      image: "bag2.jpg"
    },
    {
      title: "Bag 3",
      description: "This is a large bag",
      price: "140",
      image: "bag3.jpg"
    }
  ]
  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Data bag", this.data);
  }

  async presentToast(message: any) {
    const toast = await this.toast.create({
      message: message,
      duration: 500,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }

  submit(item, id){
    // console.log("Data bag ", item);
    // console.log("Data id", id);
    // let navigationExtras: NavigationExtras = {
    //   state:
    //   {
    //     item: item
    //   }
    // }
  }

}
