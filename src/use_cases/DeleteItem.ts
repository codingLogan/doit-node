export interface DeleteItemRepository {
  deleteItem(listId: string, itemId: string): Boolean;
}

export class DeleteItemInteractor {
  repository: DeleteItemRepository;

  constructor(repository: DeleteItemRepository) {
    this.repository = repository;
  }

  deleteItemFromList(listId: string, itemId: string) {
    return this.repository.deleteItem(listId, itemId);
  }
}
