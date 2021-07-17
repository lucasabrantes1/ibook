import { Module, VuexModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'


@Module({name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {

  private count = 0

   public get $count(){
    return this.count
  }


  @Mutation
  private INCREMENT(number: number){
    this.count += number
  }

  @Action
  public increment(){
      this.context.commit('INCREMENT',5)
  }



}
