export abstract class ProductRepository {
  public abstract search(query: string);
  public abstract detail(id: string);
  public abstract getDescription(id: string);
  public abstract getCategories(id: string);
}
