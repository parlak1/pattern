package pattern.perfectpita;

public interface Unit {
    enum IMPERIAL {
        POUND("lb", 453.592),
        GALLON("gal", 3785.41),
        OUNCE("oz", 29.5735);
        private String label;
        private double value;
        IMPERIAL(String label, double value){
            this.label = label;
            this.value = value;
        }
        public String getLabel() {
            return label;
        }
        public double getValue() {
            return value;
        }
    }
    enum METRIC {
        GRAM("g", 1),
        KILOGRAM("kg", 1000),
        LITRE("l", 1000),
        MILLILITRE("l", 1)
        ;
        private String label;
        private double value;
        METRIC(String label, double value){
            this.label = label;
        }
        public String getLabel() {
            return label;
        }
        public double getValue() {
            return value;
        }
    }
}
