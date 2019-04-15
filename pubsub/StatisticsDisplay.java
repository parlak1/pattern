package pattern.pubsub;

import java.util.ArrayList;
import java.util.List;

public class StatisticsDisplay implements DisplayElement {

	private final List<Float> temphistory;
	private final List<Float> humidityHistory;
	private final List<Float> pressureHistory;

	private Product observed;

	private List<Producible<Product>> publishers;

	public StatisticsDisplay() {
		this.temphistory = new ArrayList<>();
		this.humidityHistory = new ArrayList<>();
		this.pressureHistory = new ArrayList<>();
		this.publishers = new ArrayList<>();
	}

	@Override
	public void subscribe(final Producible<Product> publisher) {
		this.publishers.add(publisher);
		publisher.addObserver(this);
	}

	@Override
	public void unsubscribe(final Producible<Product> publisher) {
		if (this.publishers.contains(publisher)) {
			publisher.removeObserver(this);
			this.publishers.remove(publisher);
		}
	}

	@Override
	public void display() {
		System.out.println("Average temp: " + this.avg(this.temphistory) + "; average hum: " + this.avg(this.humidityHistory) + "; average pres: "
				+ this.avg(this.pressureHistory));
		System.out.println("Min temp: " + this.min(this.temphistory) + "; average hum: " + this.min(this.humidityHistory) + "; average pres: "
				+ this.min(this.pressureHistory));
		System.out.println("Max temp: " + this.avg(this.temphistory) + "; average hum: " + this.max(this.humidityHistory) + "; average pres: "
				+ this.max(this.pressureHistory));
	}

	private float avg(final List<Float> list) {
		float total = 0;
		for (final Float each : list) {
			total += each;
		}
		return list.isEmpty() ? 0 : total / list.size();
	}

	private float min(final List<Float> list) {
		float result = 0;
		for (final Float each : list) {
			if (each < result) {
				result = each;
			}
		}
		return result;
	}

	private float max(final List<Float> list) {
		float result = 0;
		for (final Float each : list) {
			if (each > result) {
				result = each;
			}
		}
		return result;
	}

	@Override
	public void pullAll() {
		if (!this.publishers.isEmpty()) {
			this.publishers.get(0).pushOne(this);
		}
	}

	@Override
	public void pullOne(final Product observed) {
		this.observed = observed;
		this.temphistory.add(((ObservedElement) observed).getTemperature());
		this.pressureHistory.add(((ObservedElement) observed).getPressure());
		this.humidityHistory.add(((ObservedElement) observed).getHumidity());
	}

	// getters and setters ....................................................

	public List<Producible<Product>> getPublishers() {
		return this.publishers;
	}

	public void setPublishers(final List<Producible<Product>> publishers) {
		this.publishers = publishers;
	}

	public Product getObserved() {
		return this.observed;
	}

	public void setObserved(final Product observed) {
		this.observed = observed;
	}

}
