package pattern.pubsub;

import java.util.ArrayList;
import java.util.List;

public class Producer implements Producible<Product> {

	private final Product product;

	private final List<Consumer> consumers;

	public Producer() {
		this.consumers = new ArrayList<>();
		this.product = new ObservedElement();
	}

	public void fixMeasurements(final float temperature, final float pressure, final float humidity) {
		((ObservedElement) this.product).setTemperature(temperature);
		((ObservedElement) this.product).setPressure(pressure);
		((ObservedElement) this.product).setHumidity(humidity);
	}

	@Override
	public void addObserver(final Consumer obs) {
		this.consumers.add(obs);
	}

	@Override
	public void removeObserver(final Consumer obs) {
		this.consumers.remove(obs);
	}

	@Override
	public void pushAll() {
		for (final Consumer each : this.consumers) {
			each.pullOne(this.product);
		}
	}

	@Override
	public void pushOne(final Consumer observer) {
		observer.pullOne(this.product);
	}


}
