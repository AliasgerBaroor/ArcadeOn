import { StyleSheet, View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useThemeStore } from '@/src/stores/themeStore';
import Check from '../../icons/Check';
import { StreakCalendarProps } from '@/src/types/molecules';
import Minus from '../../icons/Minus';
import Cross from '../../icons/Cross';

function getCurrentWeekArrays(date = new Date()) {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());

  const dayAbbr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(sunday);
    dayDate.setDate(sunday.getDate() + i);
    dates.push(dayDate.getDate());
  }

  return { days: dayAbbr, dates };
}

const StreakCalendar = ({ streakDone, todayIndex }: StreakCalendarProps) => {
  const colors = useThemeStore(s => s.colors);
  const { width: screenWidth } = Dimensions.get("screen");
  const week = getCurrentWeekArrays(new Date());
  const days = week.days;
  const dates = week.dates;


  return (
    <View style={calendarStyles.container}>
      {/* Day Labels Row */}
      <View style={[calendarStyles.daysRow, { paddingHorizontal: screenWidth / 25 }]}>
        {days.map((d, i) => (
          <Text
            key={`${d}-${i}`}
            style={[
              calendarStyles.dayText,
              { color: colors.textMuted },
            ]}
          >
            {d}
          </Text>
        ))}
      </View>

      {/* Dates Row */}
      <View style={calendarStyles.datesRow}>
        {dates.map((date, i) => {
          const isToday = i === todayIndex;
          const done = streakDone[i];
          const isPast = i < todayIndex;

          let Icon = null;
          let iconColor = colors.accentDarker;
          const capsuleStyle = [calendarStyles.dateCapsule as any];


          if (isPast && !done) {
            Icon = Cross;
            iconColor = colors.error;
            capsuleStyle.push({ borderColor: colors.error, borderWidth: 2, backgroundColor: colors.errorLightest });
          }
          else if (isToday && !done) {
            Icon = Minus;
            iconColor = colors.primary;
            capsuleStyle.push({ borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primaryLightest });
          }
          else if (done) {
            Icon = Check;
            iconColor = colors.accentDarker;
            capsuleStyle.push({ backgroundColor: colors.accentLightest });
          }
          else {
            capsuleStyle.push({ backgroundColor: colors.bgElevated });
          }

          return (
            <View key={`c-${date}-${i}`} style={capsuleStyle}>
              {Icon ? (
                <Icon size={16} color={iconColor} />
              ) : (
                <Text style={[calendarStyles.inactiveDate, { color: colors.textMuted }]}>
                  {date}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const calendarStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 8,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    // paddingHorizontal: 16,
  },
  dayText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  dateCapsule: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveDate: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default StreakCalendar;
