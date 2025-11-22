import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Clock, MapPin, Users } from 'lucide-react';

export function TimetableTable({ timetable, currentDay }) {
  const todayTimetable = timetable.filter((slot) => slot.day === currentDay);

  if (todayTimetable.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Timetable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-500 text-center py-8">No classes scheduled for today</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Today's Timetable ({currentDay})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {todayTimetable.map((slot, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                slot.class === 'Free'
                  ? 'bg-slate-50 border-slate-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Clock className="h-4 w-4" />
                  {slot.slot}
                </div>
                {slot.class !== 'Free' && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users className="h-4 w-4" />
                    {slot.class}
                  </div>
                )}
              </div>
              {slot.room !== '-' && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  Room {slot.room}
                </div>
              )}
              {slot.class === 'Free' && (
                <span className="text-sm font-medium text-emerald-600">Available</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

