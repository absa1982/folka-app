import * as React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/layout/Card';
import { Button } from '../../../components/core/Button';
import { IconButton } from '../../../components/core/IconButton';
import { EquipmentRow } from '../../../components/hr/EquipmentRow';
import { FolkaData } from '../../../data/folkaData';

export function EquipmentScreen() {
  const D = FolkaData;
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
        <Button leftIcon={<Icon name="plus" size={16} />}>Registrer udstyr</Button>
      </div>
      <Card padding="0">
        {D.equipment.map((it) => (
          <EquipmentRow key={it.name} name={it.name} category={it.category} serial={it.serial}
            assignedTo={it.who ?? undefined} status={it.status} iconNode={<Icon name={it.icon} size={18} />}
            actions={<IconButton icon={<Icon name="more-horizontal" size={16} />} aria-label="Mere" />} />
        ))}
      </Card>
    </div>
  );
}
