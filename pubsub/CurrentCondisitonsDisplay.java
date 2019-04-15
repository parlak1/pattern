package pattern.pubsub;

import java.util.ArrayList;
import java.util.List;

public class CurrentCondisitonsDisplay implements DisplayElement {

	private Product observed;

	private final List<Producible<Product>> publishers;

	public CurrentCondisitonsDisplay() {
		this.publishers = new ArrayList<>();
		this.observed = new ObservedElement();
	}

	@Override
	public void display() {
		System.out.println("current temp: " + ((ObservedElement) this.observed).getTemperature() + "; current pressure: "
				+ ((ObservedElement) this.observed).getPressure() + "; current humidity: " + ((ObservedElement) this.observed).getHumidity());
	}

	@Override
	public void pullAll() {
		if (!this.publishers.isEmpty()) {
			this.publishers.get(0).pushOne(this);
		}
		this.display();
	}

	@Override
	public void pullOne(final Product observed) {
		this.observed = observed;
		this.display();
	}

	@Override
	public void subscribe(final Producible<Product> subject) {
		this.publishers.add(subject);
		subject.addObserver(this);
	}

	@Override
	public void unsubscribe(final Producible<Product> subject) {
		if (this.publishers.contains(subject)) {
			this.publishers.remove(subject);
			subject.removeObserver(this);
		}
	}

	public Product getObserved() {
		return this.observed;
	}

	public void setObserved(final Product observed) {
		this.observed = observed;
	}

}
