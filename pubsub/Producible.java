package pattern.pubsub;

public interface Producible<Product> {

	public void addObserver(Consumer consumer);

	public void removeObserver(Consumer consumer);

	public void pushAll();

	public void pushOne(Consumer consumer);

}
