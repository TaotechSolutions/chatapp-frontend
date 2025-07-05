import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import SetStatus from './SetStatus';
import { useChangeStatusStore } from '../store/useChangeStatusStore';

const suggestedStatuses = [
  'Available 😊',
  'Busy 🚫',
  'In a meeting 📞',
  'Sleeping 😴',
  'On vacation 🏖️',
];

const duration = [
  { label: "Don't Clear", ms: null },
  { label: '30 minutes', ms: 30 * 60 * 1000 },
  { label: '1 hour', ms: 60 * 60 * 1000 },
  { label: '4 hours', ms: 4 * 60 * 60 * 1000 },
  { label: 'Today', ms: 24 * 60 * 60 * 1000 },
];

const ActivityStatusButton = () => {
  const { newStatus } = useChangeStatusStore();
  const [inpVal, setinpVal] = useState('');
  const [endTime, setendTime] = useState();
  const [selectedLabel, setselectedLabel] = useState('Set Status Time');

  const handleSelect = durations => {
    const end = durations.ms ? Date.now() + durations.ms : null;
    setendTime(end);
    setselectedLabel(durations.label);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('✅ Submitted:', inpVal, endTime);
    newStatus(inpVal, endTime);
    alert(
      `${inpVal} set until ${endTime ? new Date(endTime).toLocaleString() : 'No expiry'}`,
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-3">
            <DialogTitle className="font-bold text-[22px]">
              Set Status
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input
                id="status-input"
                name="Status"
                placeholder="Enter your status"
                value={inpVal}
                onChange={e => setinpVal(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Suggested:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedStatuses.map((status, i) => (
                  <Button
                    key={i}
                    variant="secondary"
                    size="sm"
                    type="button"
                    onClick={() => setinpVal(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 mb-4">
              <Label htmlFor="time">Remove status after...</Label>
              <SetStatus
                duration={duration}
                selectedLabel={selectedLabel}
                handleSelect={handleSelect}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityStatusButton;
