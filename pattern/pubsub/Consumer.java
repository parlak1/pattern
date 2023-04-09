package pattern.pubsub;

public interface Consumer {

	public void subscribe(Producible<Product> producer);

	public void unsubscribe(Producible<Product> producer);

	public void pullAll();

	public void pullOne(Product product);

}
