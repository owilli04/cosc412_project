import java.sql.Time;

public class TimeRange {
	private Time open, close;
	
	public TimeRange(Time open, Time close) {
		this.open = open;
		this.close = close;
	}

	public Time getOpen() {
		return open;
	}
	public Time getClose() {
		return close;
	}

	
	public void setOpen(Time open) {
		this.open = open;
	}
	public void setClose(Time close) {
		this.close = close;
	}
	
}
