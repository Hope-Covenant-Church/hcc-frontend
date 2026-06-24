import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ministry {
  name: string;
  when: string;
  details: string;
  contactName?: string;
  contact?: string;
}

@Component({
  selector: 'app-ministries',
  imports: [CommonModule],
  templateUrl: './ministries.html',
  styleUrl: './ministries.css'
})
export class MinistriesPage {
  ministries: Ministry[] = [
    {
      name: 'Church Services',
      when: 'Sunday 9:30am & 5:30pm',
      details: 'Our main worship gatherings. All are welcome.'
    },
    {
      name: 'Sunday School',
      when: 'Sunday 8:30am',
      details: 'Children & adult Bible classes.',
      contactName: 'Felicity Britz',
      contact: '055 656 565'
    },
    {
      name: 'Prayer Meeting',
      when: 'Sunday 4:30pm',
      details: 'A time of corporate prayer before the evening service.'
    },
    {
      name: 'Bible Study',
      when: 'Thursday 7pm',
      details: 'Mixed group studying God\'s Word together. Held at the Clarkes\' home, also available online.',
      contactName: 'Michael Marshland',
      contact: '083 555 6607'
    },
    {
      name: "Ladies' Bible Study",
      when: 'Wednesday mornings',
      details: 'Fellowship and study for the women of the church.',
      contactName: 'Elaine Dennil'
    },
    {
      name: "Titus 2 Ladies",
      when: 'Monthly',
      details: 'A ladies\' ministry studying books of the Bible. Open to women from other churches.',
      contactName: 'Penny Clarke',
      contact: '079 685 3939'
    },
    {
      name: "Pilgrim's Progress",
      when: 'Every 2nd & 3rd Saturday',
      details: 'A study group working through Bunyan\'s classic.',
      contactName: 'Michael Marshland',
      contact: '083 555 6607'
    },
    {
      name: 'Youth – Junior',
      when: 'Friday 3pm',
      details: 'For younger youth.',
      contactName: 'Carrie Qualls'
    },
    {
      name: 'Youth – Senior',
      when: 'Friday 5:30pm',
      details: 'For older youth.',
      contactName: 'Felicity Britz',
      contact: '055 656 565'
    },
    {
      name: 'Young Adults',
      when: 'Sunday nights (fortnightly)',
      details: 'For young adults (Grade 12+).',
      contactName: 'Robert Clarke',
      contact: '079 685 3939'
    },
    {
      name: 'Holiday Bible Club',
      when: 'Annually (Easter)',
      details: 'A special programme for children during the Easter holidays.',
      contactName: 'Felicity Britz',
      contact: '055 656 565'
    },
    {
      name: 'Outreach – Newspaper Drop',
      when: 'Every 2 months',
      details: 'Distributing the Challenge newspaper and invitations in the neighbourhood.'
    }
  ];
}
