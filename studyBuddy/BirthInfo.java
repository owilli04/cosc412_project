
public class BirthInfo {
	private int month, day, year;
	
	public BirthInfo() {
		month = 0;
		day = 0;
		year = 0;
	}
	
	public BirthInfo(int m, int d, int y) {
		month = m;
		day = d;
		year = y;
	}
	
	public BirthInfo(BirthInfo b) {
		month = b.month;
		day = b.day;
		year = b.year;
	}
	

	public int getMonth() {
		return month;
	}
	public int getDay() {
		return day;
	}
	public int getYear() {
		return year;
	}
	
	public void setMonth(int month) {
		this.month = month;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public void setYear(int year) {
		this.year = year;
	}

	// checks
	private boolean checkMonth(int m) {
		if (m <= 12 && m >= 1) {
			return true;
		}
		return false;
	}
	
	private boolean checkDay(int d) {
		if (d <= 31 && d >=1) { // only checks if less than 31, does not consider month
			return true;
		}
		return false;
	}
	
	public boolean checkValidDate() { // false if user omitted any piece
		if (month != 0 && day != 0 && year != 0) {
			return true;
		}
		return false;
	}
	
	// not sure how to check current year, but can add a checkYear statement if desired
}
