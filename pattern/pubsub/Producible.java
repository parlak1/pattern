package pattern.pubsub;

public interface Producible<T> {

	public void addObserver(Consumer consumer);

	public void removeObserver(Consumer consumer);

	public void pushAll();

	public void pushOne(Consumer consumer);

}
