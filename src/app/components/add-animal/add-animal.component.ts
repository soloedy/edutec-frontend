import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
  providers: [AnimalService]
})
export class AddAnimalComponent implements OnInit {

  private animal: Animal;
  
  constructor(
    private animalService: AnimalService,
    private router: Router

  ) {
    this.animal = new Animal('','','');
   }

  ngOnInit() {
  }

  onSubmit(){
    this.animalService.createAnimal(this.animal)
    .subscribe(
      result =>{
        if (result.animal){
          this.router.navigate(['/animals']);
        }else{
          console.log(result)
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
