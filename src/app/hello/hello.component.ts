import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements OnInit {
  formGroup: FormGroup;
  selectValue;
  constructor(private fbbuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fbbuilder.group({
      favFood: [""],
      favFruit: [""],
    });
  }
}
