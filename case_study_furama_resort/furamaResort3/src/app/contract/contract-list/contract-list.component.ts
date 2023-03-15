import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../server/contract.service';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAllContract();
  }

  getAllContract() {
    this.contractService.getAllContract().subscribe(contracts => {
      this.contractList = contracts;
    });
  }

}
