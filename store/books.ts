import { Module, VuexModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'


@Module({name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {

  @Action
  public async index()  {}

  @Action
  public async create()  {}

  @Action
  public async show()  {}

  @Action
  public async update()  {}

  @Action
  public async destroy()  {}

}
