export interface DeleteListRepository {
  deleteList(id: string): Boolean;
}

export class DeleteListInteractor {
  repository: DeleteListRepository;

  constructor(repository: DeleteListRepository) {
    this.repository = repository;
  }

  delete(listId: string) {
    return this.repository.deleteList(listId);
  }
}
