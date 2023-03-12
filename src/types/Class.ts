type Duration = {
	start: string;
	end: string;
};

type Schedule = {
	day: string;
	start: string;
	end: string;
};

export type Class = {
	id: number;
	title: string;
	professor: string;
	place: string;
	duration: Duration;
	schedules: Schedule[];
};
