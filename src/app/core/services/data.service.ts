import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { Source } from '../models/Source';
import { ParameterType } from '../models/ParameterType';
import { ParameterGroup } from '../models/ParameterGroup';
import { FoodType } from '../models/FoodType';
import { FoodParameter } from '../models/FoodParameter';
import { FoodGroup } from '../models/FoodGroup';
import { FoodData } from '../models/FoodData';

import * as sourcesData from '@data/sources.json';
import * as parameterTypesData from '@data/parameterTypes.json';
import * as parameterGroupsData from '@data/parameterGroups.json';
import * as foodTypesData from '@data/foodTypes.json';
import * as foodGroupsData from '@data/foodGroups.json';
import * as foodDataData from '@data/foodData.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sourcesSubject$: BehaviorSubject<{[key: number]: Source}> = new BehaviorSubject<{[key: number]: Source}>({});
  public sources$: Observable<{[key: number]: Source}> = this.sourcesSubject$.asObservable();
  private parameterTypesSubject$: BehaviorSubject<{[key: number]: ParameterType}> = new BehaviorSubject<{[key: number]: ParameterType}>({});
  public parameterTypes$: Observable<{[key: number]: ParameterType}> = this.parameterTypesSubject$.asObservable();
  private parameterGroupsSubject$: BehaviorSubject<{[key: number]: ParameterGroup}> = new BehaviorSubject<{[key: number]: ParameterGroup}>({});
  public parameterGroups$: Observable<{[key: number]: ParameterGroup}> = this.parameterGroupsSubject$.asObservable();
  private foodTypesSubject$: BehaviorSubject<{[key: number]: FoodType}> = new BehaviorSubject<{[key: number]: FoodType}>({});
  public foodTypes$: Observable<{[key: number]: FoodType}> = this.foodTypesSubject$.asObservable();
  private foodGroupsSubject$: BehaviorSubject<{[key: number]: FoodGroup}> = new BehaviorSubject<{[key: number]: FoodGroup}>({});
  public foodGroups$: Observable<{[key: number]: FoodGroup}> = this.foodGroupsSubject$.asObservable();
  private foodDataSubject$: BehaviorSubject<{[key: number]: FoodData}> = new BehaviorSubject<{[key: number]: FoodData}>({});
  public foodData$: Observable<{[key: number]: FoodData}> = this.foodDataSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.initializeData();
  }

  async initializeData() {
    this.sourcesSubject$.next(sourcesData as {[key: number]: Source});
    this.parameterTypesSubject$.next(parameterTypesData as {[key: number]: ParameterType});
    this.parameterGroupsSubject$.next(parameterGroupsData as {[key: number]: ParameterGroup});
    this.foodTypesSubject$.next(foodTypesData as {[key: number]: FoodType});
    this.foodGroupsSubject$.next(foodGroupsData as {[key: number]: FoodGroup});
    this.foodDataSubject$.next(foodDataData as {[key: number]: FoodData});
  }

  public getJson(): Observable<any> {
    return this.http.get("/assets/data/")
  }
}
