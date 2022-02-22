export interface GetListOutput {
  id: string | null;
  name: string;
  items: [];
}

export interface GetListsOutput {
  lists: GetListOutput[];
}

export interface GetListsRepository {
  getLists(): GetListsOutput;
}

/**
 * Upon creation it will be a named list, and an empty array of items
 */
export class GetListsInteractor {
  repository: GetListsRepository;

  constructor(repository: GetListsRepository) {
    this.repository = repository;
  }

  getLists() {
    return this.repository.getLists();
  }
}
