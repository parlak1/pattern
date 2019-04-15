package pattern.pubsub;

public class TestPubSub {

	public static void main(final String[] args) {
		final Producer washingtonPost = new Producer();
		final DisplayElement sd = new StatisticsDisplay();
		// final DisplayElement ccd = new CurrentCondisitonsDisplay();

		washingtonPost.fixMeasurements(20.2f, 1001f, 50.7f);
		sd.subscribe(washingtonPost);
		sd.display();
		sd.pullAll();
		sd.display();
		// System.out.println("\n");
		// washingtonPost.push();
		// sd.subscribe(washingtonPost);
		// System.out.println("\n");
		washingtonPost.fixMeasurements(21.6f, 1003.5f, 60.7f);
		sd.display();
		washingtonPost.pushAll();
		sd.display();
		washingtonPost.fixMeasurements(25.6f, 1053.5f, 80.7f);
		// System.out.println("\n");
		// washingtonPost.fixMeasurements(25.9f, 995.3f, 70.7f);
		// washingtonPost.push();
		// System.out.println("\n");

		// washingtonPost.removeObserver(sd);
//		sd.unsubscribe(washingtonPost);
		sd.pullAll();
		sd.display();

	}

}
