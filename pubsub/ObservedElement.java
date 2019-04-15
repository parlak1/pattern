package pattern.pubsub;

public class ObservedElement implements Product {

	private float temperature;

	private float humidity;

	private float pressure;

	public ObservedElement() {
	}

	public float getTemperature() {
		return this.temperature;
	}

	public void setTemperature(final float temperature) {
		this.temperature = temperature;
	}

	public float getHumidity() {
		return this.humidity;
	}

	public void setHumidity(final float humidity) {
		this.humidity = humidity;
	}

	public float getPressure() {
		return this.pressure;
	}

	public void setPressure(final float pressure) {
		this.pressure = pressure;
	}

}
